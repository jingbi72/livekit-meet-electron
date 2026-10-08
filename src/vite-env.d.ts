/// <reference types="vite/client" />
interface Window{livekit:{getConfig():Promise<{serverUrl:string}>;createToken(room:string,id:string,name:string):Promise<string>}}