import {ActionGetResponse} from "@solana/actions"
import { headers } from "next/headers"
import { title } from "node:process"
import { describe } from "node:test"


export const GET = (req:Request)=> {

    const payload: ActionGetResponse = {

        icom: new URL("./style/dona.png",new URL (req.url).origin).toString ()
        label: "Send DONA",
        description:"You are supporting ELLAS TECH with your donatons",
        title:"DONATONS DEMO"
    }

    return Response.json (payload,{
        headers:ACTION_CORS_HEADER
    });
}

export const OPTIONS= GET;