

## This is intended to be a tutorial on Sign distance fields!

Work in progress..


<h2>Sign Distance Fields</h2>
SDF is a mathematical representation of N-D geometry by parameterising the surface $C$ as a level set of the function $f$, $\{C : f=0\}, f: R^N \mapsto R$. This can be approximated on a discrete grid leading to the grid based representation. 


In 3D, the mesh is the level set 0 of the continuous function that returns a scalar for every coordinate (x,y,z).

--picture of mesh here--
--coronal slice of SDF here--


<h3> Computing the SDF </h3>
First, you need to calculate the unsigned distance field. The distance from every point in the grid to the surface of the mesh. As distance is inherently 

It's straight forward to calculate the distance of each point to the Mesh, which itself a discretisation that splits an object into a set of triangles. Christer Ericson  has an entire book on 3D geometry processing (book <a href="https://www.r-5.org/files/books/computers/algo-list/realtime-3d/Christer_Ericson-Real-Time_Collision_Detection-EN.pdf">r-5.org</a>). Naively however, evaluating the distance from every point is a cursed calculation taking $O(N^3M^2)$. Where $N^3$ is number of voxels and $M$ is the number of faces.

Thankfully, NVIDIA has released the Kaolin library which creates spatial partitioning tree on the GPU (bounded heirarchical volume) that reduces the computational complexity from $O(M^2)$ to $O(log(M))$. Naively, this still suffers from the cursed $O(N^3)$ term, but we will come back to this.