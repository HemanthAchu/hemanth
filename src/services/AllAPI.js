import { commonAPI } from "./Common"
import { SERVER_URL } from "./ServerURL"


export const AddrecipeAPI =async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/add`,reqBody)
}
export const getDataAPI =async()=>{
    return await commonAPI('GET',`${SERVER_URL}/get`,"")
 }

 export const deleteDataAPI=async(id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/delete/${id}`)
 }
 // EditrecipeAPI function to update an existing recipe
export const EditrecipeAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit/${id}`, reqBody);
};
export const editAPI =async(projectId,reqBody)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-project/${projectId}`,reqBody)
}
