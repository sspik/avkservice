import type { NextPage } from 'next'
import { LayoutPage } from '@components'
import styled from 'styled-components'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { Button } from '@mui/material'


const Phones: NextPage = () => {


    const rows = [
        {
            id: 1,
            lastName: 'Александр',
            phoneNumber: '+790000000',
            age: 'Нет',
        },
        { id: 2, lastName: 'Николай', phoneNumber: '+790000001', age: 'Нет' },
        { id: 3, lastName: 'Петр', phoneNumber: '+790000002', age: 'Нет' },
        { id: 4, lastName: 'Сергей', phoneNumber: '+790000003', age: 'Нет' },
        { id: 5, lastName: 'Иннокентий', phoneNumber: '+790000004', age: 'Нет' },
        { id: 6, lastName: 'Петр', phoneNumber: '+790000005', age: 'Нет' },
        { id: 7, lastName: 'Иван', phoneNumber: '+790000006', age: 'Нет' },
        { id: 8, lastName: 'Серафим', phoneNumber: '+790000007', age: 'Нет' },
        { id: 9, lastName: 'Ашот', phoneNumber: '+790000008', age: 'Нет' },
        { id: 10, lastName: 'Артем', phoneNumber: '+790000009', age: 'Нет' },
        { id: 11, lastName: 'Александр', phoneNumber: '+790000010', age: 'Нет' },
        { id: 12, lastName: 'Александр', phoneNumber: '+790000011', age: 'Нет' },
        { id: 13, lastName: 'Александр', phoneNumber: '+790000012', age: 'Нет' },
        { id: 14, lastName: 'Александр', phoneNumber: '+790000013', age: 'Нет' },
        { id: 15, lastName: 'Александр', phoneNumber: '+790000014', age: 'Нет' },
        { id: 16, lastName: 'Александр', phoneNumber: '+790000015', age: 'Нет' },
        { id: 17, lastName: 'Александр', phoneNumber: '+790000016', age: 'Нет' },
        { id: 18, lastName: 'Александр', phoneNumber: '+790000017', age: 'Нет' },
        { id: 19, lastName: 'Александр', phoneNumber: '+790000018', age: 'Нет' },
        { id: 20, lastName: 'Александр', phoneNumber: '+790000019', age: 'Нет' },
        { id: 21, lastName: 'Александр', phoneNumber: '+790000020', age: 'Нет' },
    ]

    const [data, setData] = useState<any>(rows)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Имя', width: 130 },
        { field: 'phoneNumber', headerName: 'Номер телефона', width: 130 },
        { field: 'age', headerName: 'Статус', width: 130 },
        {
            field: 'action',
            headerName: 'Перезвонили',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                const onClick = (e: { stopPropagation: () => void }) => {
                    e?.stopPropagation() // don't select this row after clicking

                    const api: GridApi = params.api
                    const thisRow: Record<string, GridCellValue> = {}

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        )


                    const updateData = data?.map((item: { id: string | number | boolean | object | Date | null | undefined }) => {
                        return item?.id === thisRow?.id ? { ...item, age: 'Да' } : item
                    })

                    return setData(updateData)
                }

                return <Button variant='contained' onClick={onClick}>Перезвонили</Button>
            },
        },

    ]

    return <LayoutPage>
        <WrapperAddress>
            <div>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[1]}
                    onCellClick={(e) => console.log(e.id)}
                    logLevel='error'


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
export default Phones
