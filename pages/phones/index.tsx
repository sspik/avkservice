import type { NextPage } from 'next'
import { LayoutPage } from '@components'
import { theme } from '../../src'
import styled from 'styled-components'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import React from 'react'


const Phones: NextPage = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Имя', width: 130 },
        { field: 'phoneNumber', headerName: 'Номер телефона', width: 130 },
        { field: 'age', headerName: 'Статус', width: 130 },
    ]

    const rows = [
        { id: 1, lastName: 'Александр', phoneNumber: '+790000000', age: <div style={{color: `${theme.colors.red.step0}`}}>FUCK</div> },
        { id: 2, lastName: 'Александр', phoneNumber: '+790000001', age: 42 },
        { id: 3, lastName: 'Александр', phoneNumber: '+790000002', age: 45 },
        { id: 4, lastName: 'Александр', phoneNumber: '+790000003', age: 16 },
        { id: 5, lastName: 'Александр', phoneNumber: '+790000004', age: null },
        { id: 6, lastName: 'Александр', phoneNumber: '+790000005', age: 150 },
        { id: 7, lastName: 'Александр', phoneNumber: '+790000006', age: 44 },
        { id: 8, lastName: 'Александр', phoneNumber: '+790000007', age: 36 },
        { id: 9, lastName: 'Александр', phoneNumber: '+790000008', age: 65 },
        { id: 10, lastName: 'Александр', phoneNumber: '+790000009', age: 16 },
        { id: 11, lastName: 'Александр', phoneNumber: '+790000010', age: null },
        { id: 12, lastName: 'Александр', phoneNumber: '+790000011', age: 150 },
        { id: 13, lastName: 'Александр', phoneNumber: '+790000012', age: 44 },
        { id: 14, lastName: 'Александр', phoneNumber: '+790000013', age: 36 },
        { id: 15, lastName: 'Александр', phoneNumber: '+790000014', age: 65 },
        { id: 16, lastName: 'Александр', phoneNumber: '+790000015', age: 16 },
        { id: 17, lastName: 'Александр', phoneNumber: '+790000016', age: null },
        { id: 18, lastName: 'Александр', phoneNumber: '+790000017', age: 150 },
        { id: 19, lastName: 'Александр', phoneNumber: '+790000018', age: 44 },
        { id: 20, lastName: 'Александр', phoneNumber: '+790000019', age: 36 },
        { id: 21, lastName: 'Александр', phoneNumber: '+790000020', age: 65 },
    ]

    return <LayoutPage>
        <WrapperAddress>
            <div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[1]}
                    checkboxSelection
                    onCellClick={(e)=> console.log(e.id)}
                    logLevel="error"

                />
            </div>
        </WrapperAddress>
    </LayoutPage>
}

const WrapperAddress = styled.div`
  display: grid;
  height: 960px;
  margin-bottom: 96px;

`
const WrapperLinkHome = styled.div`
  display: grid;
  grid-template-columns: 13px 1fr;
  grid-column-gap: 16px;

`
export default Phones
