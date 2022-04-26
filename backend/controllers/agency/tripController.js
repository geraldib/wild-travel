import { Trip } from '../../models/trip.model.js';

export const storeTrip = async (req, res) => {
  req.body.dates.forEach((date, i) => {
    req.body.dates[i] = Date.parse(date);
  });

  const trip = new Trip(req.body);
  trip.office = req.user.id;

  try {
    await trip.save();

    const tripData = {
      id: trip._id,
      title: trip.title,
      guides: trip.guides,
      dates: trip.dates,
      description: trip.description,
      agency: trip.agency,
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

export const getTrips = async (_, res) => {
  try {
    const trips = await Trip.find().sort({ _id: -1 });

    res.status(200).send({
      data: {
        message: 'All Trips',
        trips,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      res.status(404).send({
        data: {
          message: 'Trip not found!',
        },
      });
    }
    res.status(200).send({
      data: {
        message: 'Trip found',
        trip,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    trip.title = req.body.title ? req.body.title : trip.title;
    trip.guides = req.body.guides ? req.body.guides : trip.guides;
    trip.dates = req.body.dates ? req.body.dates : trip.dates;
    trip.description = req.body.description
      ? req.body.description
      : trip.description;

    await trip.save();

    res.status(200).send({
      data: {
        message: 'Trip updated',
        trip,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};

export const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    res.status(200).send({
      data: {
        message: 'Trip Deleted',
        trip,
      },
    });
  } catch (error) {
    return res.status(400).send({
      message: 'Sorry something went wrong',
    });
  }
};
