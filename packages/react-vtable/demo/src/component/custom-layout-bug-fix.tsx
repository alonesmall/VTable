import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import type { CustomLayoutFunctionArg } from '../../../src';
import {
  ListTable,
  ListColumn,
  CustomLayout,
  Group,
  Text,
  Tag,
  Checkbox,
  Radio,
  Button,
  Link,
  Avatar,
  Image,
  Popover
} from '../../../src';
import type { ListTableProps } from '../../../src/tables/list-table';

function App() {
  const [records, setRecords] = useState<any[]>([]);
  // const records = );
  const tableRef = useRef<any>(null);

  const options: ListTableProps = {
    columns: [],
    limitMaxAutoWidth: 200,
    widthMode: 'standard',
    autoFillWidth: true,
    frozenColCount: 1,
    select: {
      disableSelect: true
    },
    hover: {
      highlightMode: 'row',
      disableHeaderHover: true
    },
    dragHeaderMode: 'column',
    frozenColDragHeaderMode: 'disabled',
    tooltip: {
      isShowOverflowTextTooltip: true
    },
    enableTreeNodeMerge: false
  };

  useEffect(() => {
    const data = new Array(300).fill(['John', 18, 'male', '🏀']);
    const newData = data.map((item, index) => {
      const newItem = item;
      newItem[0] = 'John' + index;
      if (index % 5 === 0) {
        return {
          ...newItem,
          children: new Array(10).fill(['John', 18, 'male', '🏀'])
        };
      }
      return newItem;
    });
    setRecords(newData);
  }, []);

  // eslint-disable-next-line no-undef
  window.tableRef = tableRef;

  return (
    <ListTable records={records} {...options}>
      <ListColumn field="0" title="name" width="auto" tree={true} />
      <ListColumn field="1" title="age" width="auto" />
      <ListColumn field="2" title="gender" width="auto" />
      <ListColumn field="3" title="hobby" width="auto" />
    </ListTable>
  );
}

export default App;
