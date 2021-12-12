import './VoicesHeader.scss';
import {ReactComponent as OrderIcon} from 'assets/order.svg';
import {ReactComponent as RandomIcon} from 'assets/button-random.svg';

type VoicesHeaderProps = {
    sortDesc: boolean;
    onSetSortDesc: Function;
    onSetSearchText: Function;
    onRandomSelect: Function;
}

function VoicesHeader(props: VoicesHeaderProps) {
    const { sortDesc, onSetSortDesc, onSetSearchText, onRandomSelect } = props;

    return (
        <div className="voices-header">
            <input type="text" onChange={(e) => onSetSearchText(e)} />
            <button className="voice__sort btn btn-link"  data-cy="voice-sort" onClick={() => onSetSortDesc(!sortDesc)}>
                <OrderIcon />
            </button>
            <button className="voice__random-select btn btn-link"  data-cy="voice-random" onClick={() => onRandomSelect()}>
                <RandomIcon />
            </button>
        </div>
    );
}

export default VoicesHeader;
