import ChatInterface from "@/components/ChatInterface";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
// import { getConvexClient } from "@/lib/convex";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getConvexClient } from "@/lib/convex";


interface ChatPageProps {
    params: Promise<{
        chatId: Id<"chats">;
    }>;
}

async function ChatPage({ params }: ChatPageProps){
    const {chatId} = await params;

    const { userId } = await auth();
    if (!userId){
        redirect("/");
    }

    const convex = getConvexClient();

    const initialMessages = await convex.query(api.messages.list, {chatId});



    return <div>{chatId}</div>;
}


export default ChatPage;
