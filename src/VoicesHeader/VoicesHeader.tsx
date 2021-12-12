import './VoicesHeader.scss';
import {ReactComponent as OrderIcon} from 'assets/order.svg';

type VoicesHeaderProps = {
    sortDesc: boolean;
    onSetSortDesc: Function;
    onSetSearchText: Function;
}

function VoicesHeader(props: VoicesHeaderProps) {
    const { sortDesc, onSetSortDesc, onSetSearchText } = props;

    return (
        <div className="voices-header">
            <input type="text" onChange={(e) => onSetSearchText(e)} />
            <button className="voice__sort btn btn-link"  data-cy="voice-sort" onClick={() => onSetSortDesc(!sortDesc)}>
                <OrderIcon />
            </button>
        </div>
    );
}

export default VoicesHeader;
