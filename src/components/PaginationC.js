import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import styled from 'styled-components';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';

const PaginationC = (props) => {
    const SayfalamaD = styled.div`
        
    `; 

    return (
        <SayfalamaD>
            <Pagination size="lg" className='sayfalama' >
                <PaginationItem
                        onClick={()=>{props.sayfaCek(1)}}>
                    <PaginationLink
                        first 
                    />
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink 
                        previous
                    />
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(1)}}>
                    <PaginationLink >
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(2)}}>
                    <PaginationLink >
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(3)}}>
                    <PaginationLink >
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(4)}}>
                    <PaginationLink >
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(5)}}>
                    <PaginationLink >
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(6)}}>
                    <PaginationLink >
                        6
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(7)}}>
                    <PaginationLink >
                        7
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(8)}}>
                    <PaginationLink >
                        8
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem
                        onClick={()=>{props.sayfaCek(9)}}>
                    <PaginationLink >
                        9
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        next
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink 
                        last
                    />
                </PaginationItem>
            </Pagination>
        </SayfalamaD>
    )
};

export default PaginationC;