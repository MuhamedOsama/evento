# evento
trying out SparklesJs + BullJs with Redis

small PoC before starting development in real work project

feature: to log basic user events/activities and store them in monogoDb

## examples
#### example 1 : userX liked this post
#### example 2: userX recommended this course
#### example 3: userX reviewd this course 5 stars

###### sparkles emits events at the service level, these events add a job to bull js that contains logic to save a log to mongodb.
