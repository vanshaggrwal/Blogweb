import mongoose from "mongoose";

const connect = async() => {
    await mongoose.connect('mongodb+srv://vanshaggrwl:vansh2003@cluster0.rhfgr.mongodb.net/Blogify?retryWrites=true&w=majority&appName=Cluster0');
    console.log('server is connected to the database...');
}

export default connect;