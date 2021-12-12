import './VoicesHeader.scss';
import {ReactComponent as OrderIcon} from 'assets/order.svg';

type VoicesHeaderProps = {
    sortDesc: boolean;
    onSetSortDesc: Function;
}

function VoicesHeader(props: VoicesHeaderProps) {
    const { sortDesc, onSetSortDesc } = props;

    return (
        <div className="voices-header">
            <button className="voice__sort btn btn-link"  data-cy="voice-sort" onClick={() => onSetSortDesc(!sortDesc)}>
                <OrderIcon /> {sortDesc}
            </button>
        </div>
    );
}

export default VoicesHeader;
