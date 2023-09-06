import React, { useEffect, useState } from 'react';
import useAxiosNormal from './useAxiosNormal';

const useAllProblems = () => {
    const [axiosNormal] = useAxiosNormal();
    const [allProblems, setAllProblems] = useState([]);
    const [problemLength, setProblemLength] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    // Pagination
    const [filterLevel, setFilterLevel] = useState("");
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [totalProblems, setTotalProblems] = useState(0);
    const totalPages = Math.ceil(totalProblems / itemsPerPage)


    useEffect(() => {
        axiosNormal.get(`/problem/?search=${searchText}&level=${filterLevel}&page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then((data) => {
                setAllProblems(data.data);
                setProblemLength(data.totalCount)
                setIsLoading(false)
            });
    }, [filterLevel, searchText, currentPage, itemsPerPage]);

    return { allProblems, problemLength };
};

export default useAllProblems;