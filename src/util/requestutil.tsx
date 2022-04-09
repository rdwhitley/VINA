import axios from 'axios';


const client = axios.create({baseURL: "https://jarsetqtpg.execute-api.us-east-1.amazonaws.com/Prod/vcs-api-p/"})

client.defaults.headers.common['Content-Type'] = "application/json";
client.defaults.headers.common['Accept'] = "application/json";
    
export default client;