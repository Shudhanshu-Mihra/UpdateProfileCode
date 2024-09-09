import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';

export const useUploadViewState = () => {
//   const { receiptIndex } = props;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const user = useSelector((state: IState) => state.user);

    const [isModalWindowOpen, onModalWindowToggle] = useToggle();

    return { 
        isModalWindowOpen,
        onModalWindowToggle,
    };
};
