export interface IPostProps {
    userId:number,
    id:number,
    title:string,
    body:string, 
}
export interface IPostPageProps {
    postList:IPostProps[]
    loading:boolean;
}