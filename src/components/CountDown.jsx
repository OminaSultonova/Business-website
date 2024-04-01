import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)

      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='countdown'>
      <h2 className='discount-title'>Discount ends soon: </h2>
      <div>
      <h3>{timeLeft.days} : </h3>
        <h3>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours} : </h3>
        <h3>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes} : </h3>
        <h3>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</h3>
      </div>
    </div>
  );
};

CountDown.propTypes = {
    targetDate: PropTypes.instanceOf(Date).isRequired,
  };
export default CountDown;
