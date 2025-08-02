from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Flatten

model = Sequential([
    Flatten(input_shape=(32, 32, 3)),  # For 32x32 RGB images
    Dense(200, activation='relu'),
    Dense(150, activation='relu'),
    Dense(100, activation='softmax')   # CIFAR-100 has 100 classes
])
model.summary()