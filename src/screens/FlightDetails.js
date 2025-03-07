import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import FlightWhiteDetailCard from '../components/FlightWhiteDetailCard';
import FlightDetailsCard from '../components/FlightDetailsCard';
import InfoCard from '../components/InfoCard';
import {token} from '../utils/Constants';
import axios from 'axios';

const FlightDetails = ({route}) => {
  const {resultIndex, traceId} = route.params || {};
  const [loading, setLoading] = useState(true);
  const [flightDetails, setFlightDetails] = useState(null);
  const [fareRules, setFareRules] = useState(null);

  const API_BASE =
    'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest';

  const fetchFlightDetails = async () => {
    try {
      const requestBody = {
        EndUserIp: '192.168.5.56',
        TokenId: token,
        TraceId: traceId,
        ResultIndex: resultIndex,
      };

      // Fetch Fare Rules API using Axios
      const fareRuleResponse = await axios.post(
        `${API_BASE}/FareRule`,
        requestBody,
        {headers: {'Content-Type': 'application/json'}},
      );
      setFareRules(fareRuleResponse.data?.Response?.FareRules || []);

      // Fetch Fare Quote API using Axios
      const fareQuoteResponse = await axios.post(
        `${API_BASE}/FareQuote`,
        requestBody,
        {headers: {'Content-Type': 'application/json'}},
      );

      const fareQuoteData = fareQuoteResponse.data;
      if (fareQuoteData?.Response?.Results?.length) {
        setFlightDetails(fareQuoteData.Response.Results[0]);
      }
    } catch (error) {
      console.error('Error fetching flight details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightDetails();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor={'#000'} />
      <CustomHeader label="Flight Details" />
      <ScrollView style={{flex: 1, backgroundColor: '#121212', padding: 10}}>
        {/* Flight Details */}
        <FlightDetailsCard
          departureTime={flightDetails?.Segments?.[0]?.[0]?.DepTime || 'N/A'}
          arrivalTime={flightDetails?.Segments?.[0]?.[0]?.ArrTime || 'N/A'}
          departureCity={
            flightDetails?.Segments?.[0]?.[0]?.Origin?.Airport?.CityName ||
            'N/A'
          }
          arrivalCity={
            flightDetails?.Segments?.[0]?.[0]?.Destination?.Airport?.CityName ||
            'N/A'
          }
          duration={flightDetails?.Segments?.[0]?.[0]?.Duration || 'N/A'}
        />

        {/* Fare Rules Section */}
        <InfoCard
          title="FARE RULES"
          data={
            fareRules?.length
              ? fareRules.map((rule, index) => ({
                  label: `Rule ${index + 1}`,
                  value: rule.FareRuleDetail || '-',
                }))
              : [{label: 'No Fare Rules Available', value: '-'}]
          }
        />

        {/* Cancellation & Reschedule Info */}
        <InfoCard
          title="CANCELLATION POLICY"
          data={[
            {label: 'Before Departure', value: '₹2,500'},
            {label: 'Within 24hrs', value: '₹4,000'},
          ]}
        />
        <InfoCard
          title="RESCHEDULE POLICY"
          data={[
            {label: 'Before Departure', value: '₹2,000'},
            {label: 'Within 24hrs', value: '₹3,500'},
          ]}
        />

        {/* Terms & Conditions */}
        <InfoCard
          title="TERMS & CONDITIONS"
          data={[
            {
              label: '1.',
              value:
                'Cancellation charges are applicable per passenger per sector.',
            },
            {
              label: '2.',
              value:
                'Discount and Assured fee, if any, will be adjusted in the final refund amount.',
            },
            {
              label: '3.',
              value:
                'Partial cancellation cannot be made for tickets booked under special or discounted fares.',
            },
            {
              label: '4.',
              value:
                'In case of a no-show or tickets canceled post a specific time, only statutory taxes are refundable.',
            },
            {
              label: '5.',
              value:
                'Penalty charged by the airline is indicative only and may change without prior notice. Travlo does not guarantee accuracy.',
            },
            {
              label: '6.',
              value:
                'Cancellation requests will be processed only within the mentioned time period.',
            },
            {
              label: '7.',
              value:
                'If the flight fare is less than default cancellation penalty, then taxes will be refundable.',
            },
            {
              label: '8.',
              value:
                'Reschedule request will be processed only within the mentioned time period.',
            },
            {
              label: '9.',
              value:
                'The difference in fares between the old and new booking will be payable by the user.',
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default FlightDetails;
