import {useMemo} from "react";
import { EmployeeType } from "@/types/EmployeeType";
export const useCalculateWage = (employees: EmployeeType[]) => {

    const totalWage = useMemo(() => {
        let total = 0;

        for (let i = 0; i < employees.length; i++) {
            total += employees[i].sueldo;
        }
        return total;
    }, [employees]); 
    
    return { totalWage };
};