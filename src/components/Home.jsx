import React from 'react';
import '../App.css';
import 'devextreme/dist/css/dx.light.css'

import DataGrid,
{
    Column,
    Editing,
    Paging
}
from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';


const Home = (props) => {

    return (
        <>
        <div id="data-grid-demo">
        <DataGrid
          dataSource={props.user.goals}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
          <Editing
            mode="form"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true} />
          <Column dataField="title" caption="Title" width={70} />
          <Column dataField="description" />
          <Column dataField="time" dataType="number"/>
        </DataGrid>
      </div>
        </>
    );
}

export default Home;