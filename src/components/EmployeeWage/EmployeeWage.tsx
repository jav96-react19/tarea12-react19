import { useCalculateWage } from "@/hooks/WageDetails/Calculate/useCalculateWage";
import { useShowTotal } from "@/hooks/WageDetails/ShowTotal/useShowTotal";
import { handleClick } from "@/utils/handleClick";
import { Employees } from "@/models/Employees";

export const EmployeeWage = () => 
{
    const { totalWage } = useCalculateWage(Employees); // Pasa los empleados como argumento
    const {showTotal, setShowTotal} = useShowTotal();

    return <>
        <button onClick={() => handleClick(setShowTotal)}>Calcular Sueldo Total</button>
        {showTotal && <p>Salario Total: ${totalWage}</p>} 
    </>    
}