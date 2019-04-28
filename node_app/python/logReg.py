# Package imports
import numpy as np
import matplotlib.pyplot as plt
import sklearn
import sklearn.datasets
import sklearn.linear_model
# from planar_utils import plot_decision_boundary, sigmoid, load_planar_dataset, load_extra_datasets
import sys, json
logData = sys.argv
# %matplotlib inline
train = json.loads(logData[1])
# print(train.values)

X = np.array([[int(point["x"]) for point in train],[int(point["y"]) for point in train]])
Y = np.array([[int(point["color"]) for point in train]])
print("X.shape: ",X.shape) #prints (rows,cols) = (2,100)
print("Y.shape: ",Y.shape) #(1,100)
print ('I have m = %d training examples!' % (Y.shape[1]))
#number of INPUT NODES ; one hidden layer, with arbitrary value of 4 nodes ; 1 output node
n_x = 2 ; n_h = 4 ; n_y = 1

# Train the logistic regression classifier
clf = sklearn.linear_model.LogisticRegressionCV().fit(X.T, Y.T)
predicted = clf.predict(X.T)
print("Default sklearn log predictions: ", predicted)# Plot the decision boundary for logistic regression
# plot_decision_boundary(lambda x: clf.predict(x), X, Y)
# plt.title("Logistic Regression")
# plt.save("../client/src/images/simpleLogReg.png")
