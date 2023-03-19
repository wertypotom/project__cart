import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { TItemToggle, TStoreItems } from '../types/TStoreItems';

type Props = {
  items: TStoreItems[];
  toggleItem: (id: number, type: TItemToggle) => void;
};

const Store = ({ toggleItem, items }: Props) => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} toggleItem={toggleItem} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
