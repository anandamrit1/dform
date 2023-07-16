import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRecoilValue } from 'recoil';
import { adminFormAtom } from '.';
import Skeleton from 'react-loading-skeleton';

const rows: any[] = [
];

export default function DataGridDemo() {
  const form = useRecoilValue(adminFormAtom)

  const columns: GridColDef[] | undefined = form?.feilds?.map((question) => {
    return {
      field: question.id,
      headerName: question.title,
      width: 150,
    }
  })

  if (!form) return <ResponseSkeleton />
  return (
    <div className='lg:w-2/3 m-auto bg-white p-6'>
      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns!}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

const ResponseSkeleton = () => {
  return <div className='lg:w-2/3 m-auto bg-white p-6'>
      <Skeleton
       style={{
        width: "100%",
        height: "400px",
       }}
      />
    </div>
}