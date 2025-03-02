import {makeAutoObservable} from 'mobx'
import serviceAuth from './Service';

export default class Store{
    isAuth = false
    constructor(){
        this.user = {};
        makeAutoObservable(this)
    }
    setAuth(bool){
        this.isAuth = bool;
    }

    setUser(username, password, email){
        this.user = {username, password, email}
    }
    async register(username,password,email){
        try{
            const response = await serviceAuth.register(username,password,email)
            console.log("response " + response)
            localStorage.setItem("Auth", JSON.stringify(true))
            localStorage.setItem("Userauth", JSON.stringify(username))
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e)
        }
    }
    async sendMessage(user1,user2,text){
        console.log(user1,user2,text)
        try{
            const response = await serviceAuth.sendMessage(user1,user2,text)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }
    async getletter(From,To,text){
        try{
            const response = await serviceAuth.sendletter(From,To,text)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }
    async getContact(user){
        try{
            const response = await serviceAuth.getcontact(user)
            return response.data
        }catch(e){
            console.log(e)
        }
    }

    async getChat(user1,user2) {
        try{
            const response = await serviceAuth.getChat(user1,user2)
            return response.data
        }catch(e){
            console.log(e)
        }
    }
 
}