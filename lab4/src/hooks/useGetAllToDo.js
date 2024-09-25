import { useEffect } from 'react';
import { useState } from "react";

export const useGetAllToDo = ({setToDos}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() =>
        {
          const fetchData = async () => {
            try {
                fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => {
            setToDos(json);
            setIsLoading(false);
          });
            } catch(error){
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
        }, 2000)
      }, []);

      return {isLoading, error};
}

