// Question 1
function F21 (A = new Array(9)){
// Questions 2 and 3
    for (let i = 0; i < 9; i++){
        // verifying if all element are numbers and between 1 and 9
        if (isNaN (A[i]) || A[i] < 1 || A[i] > 9)
        {
            return false;
        }
        // verifying if any elements are the same
        else{ for(let j =i + 1; j <9; j++)
                {
                    if (A[i] === A[j])
                    {
                        return false;
                    }      
                }
            }
    }
    return true;   
}

export {F21};
