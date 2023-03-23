// Como podemos rodar isso em um arquivo .ts sem causar erros?

//foi criado uma interface para employee com as infromações desejada

interface Employee{

    code: number;
    name: string;
}

let employee: Employee = {

    code: 10,
    name: "John"
}

let employee2 = { } as Employee;
employee2.code = 10;
employee2.name = "John";