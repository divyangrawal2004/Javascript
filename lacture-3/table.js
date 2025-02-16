var tbl = `
        
<thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Number</th>                    
        <th>Image</th>                    
    </tr>
 </thead>
 <tbody>
    <tr>
        <td>8195</td>
        <td>American cat</td>
        <td>987654321</td>
        <td><img src ="https://images.litter-robot.com/media/magefan_blog/american-cat-breeds.png " width ="100"></td>
        </tr>

         <tr>
        <td>8196</td>
        <td>Indian cat</td>
        <td>123456789</td>
        <td><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAZoP9UkLDA4oguMhcTgCAjcVfjL9lQcSeA&s" width = "100"></td>

        </tr>

         <tr>
        <td>8197</td>
        <td>Russian cat</td>
        <td>3456789876</td>
        <td><img src ="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" width = "100"></td>
        </tr>

         <tr>
        <td>8198</td>
        <td>American cat</td>
        <td>098763455</td>
        <td ><img src = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" width ="100"></td>
        </tr>
    </tbody>

`
console.log(tbl);
document.getElementById(`todo`).innerHTML = tbl;