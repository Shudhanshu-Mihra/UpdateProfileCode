import React from "react";
import { ReactComponent as Processing } from '../../../assets/icons/Processing-1.svg';
import { ReactComponent as Approved } from '../../../assets/icons/approved-dash.svg';
import { ReactComponent as Rejected } from '../../../assets/icons/rejected.svg';
import { ReactComponent as Archived } from '../../../assets/icons/archieved-dash.svg';
import { DashboardStyles as Styled } from '../Dashboard.style';
import { ReactComponent as SalesInvoice} from '../../../assets/icons/salse-invoice-dash.svg';
import { ReactComponent as Receipt} from '../../../assets/icons/reciept-dash.svg';
import {ReactComponent as Reviewed} from '../../../assets/icons/review-dash.svg'

// Mapping status to corresponding icons
const statusIcons: Record<string, JSX.Element> = {
  processing: <Processing />,
  approved: <Approved />,
  rejected: <Rejected />,
  archived: <Archived />,
  review: <Reviewed />,
};

const typeIcons: Record<string, JSX.Element> = {
  "sale-invoice": <SalesInvoice width="22px" height="22px"/>,
  receipt: <Receipt width="20px" height="20px" />,
};

export interface TimeLineProps {
  latestTimeLineData: {
    custom_id?: string;
    updated?: string;
    status?: string;
    total?: string;
    supplier?: string;
    type?:string;
    type_user?:string;

  }[];
}

export const UpdatesTimeLine: React.FC<TimeLineProps> = (props) => {
  const { latestTimeLineData = [] } = props;
  {console.log("latestTimeLineData",latestTimeLineData)};
  return (
    <Styled.Container>
      <Styled.Heading>Updates / Timeline</Styled.Heading>
      {Array.isArray(latestTimeLineData) && latestTimeLineData.length > 0 ? (
        latestTimeLineData.map((update, index) => {
          const formattedDate = update.updated
            ? new Date(update.updated).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : 'N/A';
          const statusIcon = update.status ? statusIcons[update.status] : null;
          const typeIcon = update.type ? typeIcons[update.type] : null;
          return (
            <Styled.ListItem key={index}>
              <Styled.CompanyName>{update.type_user || 'N/A'}</Styled.CompanyName>
              <Styled.MiddleIconsUpdates>
              {typeIcon}
              </Styled.MiddleIconsUpdates>
              <Styled.IconContainer>{statusIcon}</Styled.IconContainer>
              <Styled.Date>{formattedDate}</Styled.Date>
              <Styled.Price>{update.total}</Styled.Price>
            </Styled.ListItem>
          );
        })
      ) : (
        <h1>No updates available</h1>
      )}
    </Styled.Container>
  );
};
