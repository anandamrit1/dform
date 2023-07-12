import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRecoilValue } from 'recoil';
import { questionListAtom } from './QuestionList';

const rows: any[] = [
];

export default function DataGridDemo() {
    const questions = useRecoilValue(questionListAtom)

    const columns: GridColDef[] = questions.map((question) => {
        return {
            field: question.formFieldId,
            headerName: question.title,
            width: 150,
        }
    })

  return (
    <div className='lg:w-2/3 m-auto'>
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
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