import {connect} from 'mongoose'
export const connectToDatabase = async () => {
    await connect('mongodb+srv://Admin1:Udval2104!@cluster0.yd6wvve.mongodb.net/?appName=Cluster0')
}