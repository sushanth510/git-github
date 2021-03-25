TYPESCRIPT:
Advantages of ts over js:
	1>it supports strongly typed or static typing language
	2>ts highlights errors at compile time only where as js does it at run time.
	3>supports es-6 features
disadvantages:
	->takes more time to compile

--------------------------------------------------
TS TYPES:
1)static
2)generic
3)decorator

->static:
	a)Built-in
		syntax:
			let identifier:datatype=value;
		
		1)number
		2)string
		3)boolean
		4)void
		5)any
	b)user-defined
		1)array:collection of elements of same data type
			let identifier:datatype[]=[element1,element2,element3,...]
			let identifier:Array<datatype>=[element1,element2,element3,...]
		2)tuple:collection of elements of different data type defined in particular order.
			let identifier:[datatype1,datatype2,.]=[element dt1,element dt2,]
		3)interface:
			->it is a user defined datatype which contains just the 
			declaration of poperties,methods,events.it defines
		 	the syntax the instant entity should follow.
			->syntax:
				interface interface_name { 
   					//properties declaration
					identifier:datatype
					//function declaration
   					identifier: ()=>return_type 
				} 

				var object_name:interface = { 
					//declaring interface varibales
					identifier:value;
					//function defination
					identifier:():return_type=>{}
   				}
		4)Class:
			->it is a user defined datatype which contains reusable components
			act as template for the object.
			->it contains implementation in it where as interface doesn't 
			contain implementation.
			Syntax:
				class class_name
				{
					//properties
					constructor()
					{
					//initialization of properties
					}
					//methods
					function_name():returntype{}
				}
		5)enums:
			->it is user defined datatype which allows us to declare 
			named constants.
			enum enum_name{
				value1,
				value2,
				value3
			}
		6)function:
			->function is logical block of code to orgsnixe or reuse the program
			function function_name:return_type{
			//code
			}
->Generic
	->it is a data type which is used to crate a component which can work with different 
	data types 
	->eg:
	function identity<T>(arg: T): T {  
    		return arg;  
	}  
	let output1 = identity<string>("myString");  
	let output2 = identity<number>( 100 ); 
->Decorator:A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.


 


--------------------------------------------------------------
Rest paramenters:
function function_name(...identifier:number[]):return_type
{

}


Anonymous functions:functions that are not bound to identifier is called anonymous function
syntax:var res = function( [arguments] ) { ... }
------------------------------------------------------------

5. Decorators:



7.Type guards:It is a way that can be used to get the info of types which is used in 
conditional block
	a)typeof
	b)instanceof
	c)===,!==
	d)in
