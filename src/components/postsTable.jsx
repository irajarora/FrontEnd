const PostsTable = (props) => {
    return ( 
        <div className="mt-3">
            <table className="table table-dark table-striped w-50 m-auto">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Post Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                    {props.posts.map(pos=>(
                        <tr>
                            <td>{pos.userId}</td>
                            <td>{pos.id}</td>
                            <td>{pos.title}</td>
                            <td>{pos.body}</td>
                        </tr>
                    ))}
                    
            </tbody>
        </table>
        </div>
     );
}
 
export default PostsTable;