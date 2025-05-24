import User from "../models/user.model";
import { Webhook } from "svix";

const clerkWebooks = async(req,res)=>{
    try{
        // Create svix instance
        const hook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //Get headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //Verify Headers
        await hook.verify(JSON.stringify(req.body),headers)

        //Get data from request body
        const {data,type} = req.body

        const userData = {
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username: data.first_name +""+ data.last_name,
            image:data.image_url,
        }
        //Switch cases for different events
        switch(type){
            case "user.created":{
                await User.create(userData);
                break;

            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id,userData);
                break;

            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;

            }

            default:
                break;
        }
        res.json({success : true,message:"Webhook received successfully!"})

    }catch (error){
        console.log(error.message)
         res.json({success : false,message:error.message})
    }
}
export default clerkWebooks;