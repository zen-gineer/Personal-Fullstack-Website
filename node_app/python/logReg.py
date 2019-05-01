# Package imports
import numpy as np
import matplotlib.pyplot as plt
import sklearn
import sklearn.datasets
import sklearn.linear_model
# from planar_utils import plot_decision_boundary, sigmoid, load_planar_dataset, load_extra_datasets
import sys
import json

inData = json.loads(sys.argv[1])


def create_X_Y():
    train = inData['logData']
    X = np.array([[int(point["x"]) for point in train],
                  [int(point["y"]) for point in train]])
    Y = np.array([[int(point["color"]) for point in train]])
    # print(train, '\n', X, '\n', Y)
    print("X.shape: ", X.shape)  # prints (rows,cols) = (2,100)
    print("Y.shape: ", Y.shape)  # (1,100)
    print('I have m = %d training examples!' % (Y.shape[1]))
    # number of INPUT NODES ; one hidden layer, with arbitrary value of 4 nodes ; 1 output node
    return (X, Y, train)

def testSklearn(X, Y, train):
    # Train the logistic regression classifier
    clf = sklearn.linear_model.LogisticRegressionCV().fit(X.T, Y.T)
    predicted = clf.predict(X.T)
    predictedDict = [{'p': v, 'v': y, 'x': x1, 'y': x2}
                     for v, x1, x2, y in zip(predicted, X[0], X[1], Y[0])]
    # Plot the decision boundary for logistic regression
    print("Default sklearn log predictions: ", predictedDict, '*')
    accuracy = float(
        (np.dot(Y, predicted) + np.dot(1-Y, 1-predicted))/float(Y.size)*100)
    print("Default sklearn log accuracy:", accuracy)

#---- --- ---- ---- ---- --- ---- ---- ---- --- ---- ---- ----- ---- ---
def sigmoid(x):
    """
    Compute the sigmoid of x

    Arguments:
    x -- A scalar or numpy array of any size.

    Return:
    s -- sigmoid(x)
    """
    s = 1/(1+np.exp(-x))
    return s



def initialize_parameters(n_x, n_h, n_y):
    """
    Argument:
    n_x -- size of the input layer
    n_h -- size of the hidden layer
    n_y -- size of the output layer
    
    Returns:
    params -- python dictionary containing your parameters:
                    W1 -- weight matrix of shape (n_h, n_x)
                    b1 -- bias vector of shape (n_h, 1)
                    W2 -- weight matrix of shape (n_y, n_h)
                    b2 -- bias vector of shape (n_y, 1)
    """
    
    np.random.seed(2) # we set up a seed so that your output matches ours although the initialization is random.
    
    ### START CODE HERE ### (≈ 4 lines of code)
    W1 = np.random.randn(n_h, n_x)*.01
    b1 = np.zeros((n_h, 1))
    W2 = np.random.randn(n_y, n_h)*.01
    b2 = np.zeros((n_y, 1))
    ### END CODE HERE ###
    
    assert (W1.shape == (n_h, n_x))
    assert (b1.shape == (n_h, 1))
    assert (W2.shape == (n_y, n_h))
    assert (b2.shape == (n_y, 1))
    
    parameters = {"W1": W1,
                  "b1": b1,
                  "W2": W2,
                  "b2": b2}
    
    return parameters

def forward_propagation(X, parameters):
    """
    Argument:
    X -- input data of size (n_x, m)
    parameters -- python dictionary containing your parameters (output of initialization function)
    
    Returns:
    A2 -- The sigmoid output of the second activation
    cache -- a dictionary containing "Z1", "A1", "Z2" and "A2"
    """
    # Retrieve each parameter from the dictionary "parameters"
    W1 = parameters['W1']; b1 = parameters['b1']
    W2 = parameters['W2']; b2 = parameters['b2']
    
    # Implement Forward Propagation to calculate A2 (probabilities)
    Z1 = np.dot(W1,X)+b1 ; A1 = np.tanh(Z1)
    Z2 = np.dot(W2,A1)+b2 ; A2 = sigmoid(Z2)
    assert(A2.shape == (1, X.shape[1]))
    
    cache = {"Z1": Z1,
             "A1": A1,
             "Z2": Z2,
             "A2": A2}

    return A2, cache


def myLogModel(X, Y, train):
    n_x = X.shape[0]  # size of input layer
    n_h = int(inData['model']['hidden_nodes'])
    n_y = Y.shape[0]  # size of output layer
    ### END CODE HERE ###
    parameters = initialize_parameters(n_x, n_h, n_y)
    print(parameters)
    A2, cache = forward_propagation(X, parameters)
    print(A2, cache)
    
    return (n_x, n_h, n_y)


def runSklearn():
    pass


if __name__ == "__main__":
    if inData['task'] == "sklearn":
        testSklearn(*create_X_Y())
    elif inData['task'] == "myLog":
        myLogModel(*create_X_Y())
