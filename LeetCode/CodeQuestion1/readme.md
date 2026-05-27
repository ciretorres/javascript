# 1. Code Question 1

In amazóns distribution network, there are several drones with varying capacities, ranging from 1 to 109. Each jth drone has a carrying capacity of j. The company needs to dispatch n packgaes, where the weight of the i th package is given by pack[i].

During peark delivery times, only two drones are available to transport the packages, and they must alternate in their duties. This means that if Drone 1 handles the ith package, Drone 2 must handle the (i+1)th package, an so on.

However, there may be challengues if the drones cannot handle certain package weight (i.e., some packages may be too heavy for a drone). To address this, Amazon can replace certain packages with others of a different weight to ensure that all packages are successfully delivered.

Given the ability to choose any two drones, your task is to determine the minimym number of replacements need to ensure that all packags can be successfully delivered.

Example
n = 4
pack = [3,1,3,2]

With the provided package weigths [3,1,3,2], the two drones wo'nt be able to alternate in habdling the packages. To resolve this, the fourth package, whuch weights 2 can be replaced wi a package of weigth 1. This results in the adjusted weights:

- pack  = [3,1,3,1]. Now, two drones with carrying capacities of 3 and 1 can handle the packages alternately. Therefore, only one replacement is needes.

Thus, the answer is 1.

Function Description
Complete the function finMinReplacements in the editor below.

finMinReplacements has de following parameter:
int pack[n]: an array representing the weigts of packages.

Returns
int: the minimum number of replacements needed.

Contraints

- 2 <= n >= 2 * 105.
- n is even.
- 1 <= pack[i] <= 109

Sample Input 0

STDIN       Function
---         ---
6    ->     the size of pack n = 6
105  ->     pack = [105,119,105,119,105,119]
119
105
119
105
119

Sample Output 0
0

Explanation
The dronw weigths [105,119,105,119,105,119] are feasible to handle these packages if the drones with abilities 105 and 109 are employed.

Sample Input 1

STDIN         Function
---           ---
4   ->        the size of pack n = 4
1   ->        pack = [1,1,1,1]
1
1
1

Sample Output 1
2

Explanation
For package weigths [1,1,1,1], all pakcgaes are of equal weight, making it impossibe for drones with carrying capactieies of 1 and 2 to alternate in delivering the packages. To fix this, the weights of the 1st and 3rd packages can de replaced with weigth 2. The updated package weigths will be:

- pack = [2,1,2,1]. Noe, two drones with carrying capacities of 1 and 2 can handle the packages alternately. Therefore, two replacements are needed.

Thus, the answer is 2.