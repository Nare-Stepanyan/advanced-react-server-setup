import mongoose, {Schema} from mongoose;

const useSchema = new Schema({
  email:{
    type: String,
    unique: true,
    lowercase: true
  },
  passwoed: String 
})

export default mongoose.model('user', useSchema);