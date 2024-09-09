import React from "react";
import { ReactComponent as Processing } from '../../../assets/icons/Processing-1.svg';
import { ReactComponent as Approved } from '../../../assets/icons/approved-dash.svg';
import { ReactComponent as Rejected } from '../../../assets/icons/rejected.svg';
import { ReactComponent as Archived } from '../../../assets/icons/archieved-dash.svg';
import { ReactComponent as Review } from '../../../assets/icons/review-dash.svg';
import { DashboardStyles as Styled } from '../Dashboard.style';

interface PurchaseProps {
  purchaseDash: {
    processing?: string;
    review?: string;
    rejected?: string;
    approved?: string;
  };
}

export const Purchases: React.FC<PurchaseProps> = (props) => {
  const {
    purchaseDash,
  }=props;

  return (
    <Styled.PurchasesContainer>
      <Styled.PurchasesTitle>Purchases</Styled.PurchasesTitle>
      <Styled.PurchasesMetrics>
        <Styled.Metric>
          <Styled.MetricIcon><Processing /></Styled.MetricIcon>
          <Styled.MetricValue>{purchaseDash.processing}</Styled.MetricValue>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Approved /></Styled.MetricIcon>
          <Styled.MetricValue>{purchaseDash.approved}</Styled.MetricValue>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Rejected /></Styled.MetricIcon>
          <Styled.MetricValue>{purchaseDash.rejected}</Styled.MetricValue>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Review /></Styled.MetricIcon>
          <Styled.MetricValue>{purchaseDash.review}</Styled.MetricValue>
        </Styled.Metric>
      </Styled.PurchasesMetrics>
    </Styled.PurchasesContainer>
  );
};


