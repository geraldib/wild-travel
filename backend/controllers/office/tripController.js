import { Trip } from '../../models/trip.model.js';
import { User } from '../../models/user.model.js';

export const storeTrip = async (req, res) => {
  req.body.dates.forEach((date, i) => {
    req.body.dates[i] = Date.parse(date);
  });

  const trip = new Trip(req.body);
  trip.office = req.user.id;

  try {
    await trip.save();

    const office = await User.findById(req.user.id);
    office.trips.push(trip._id);
    await office.save();

    const tripData = {
      id: trip._id,
      title: trip.title,
      guides: trip.guides,
      dates: trip.dates,
      description: trip.description,
      office: trip.office,
    };
    return res.status(201).send({
      data: {
        message: 'Trip Created',
        trip: tripData,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};
