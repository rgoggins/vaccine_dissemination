# import json
# fp = "./data/unsk-b7fc.json.1"
# data = None
# with open(fp, "r") as read_file:
#     data = json.load(read_file)
#
# if (not data):
#     print("Data could not be loaded")
#     exit(0)
# else:
#     print("Data loaded into dict")
#
# print("Type of external structure:",type(data))
# print("Length of data: " + str(len(data)))
#
#
# print("Type of first internal structure",type(data[0]))
# print("Keys of first internal structure",data[0].keys())
import pandas as pd

df = pd.read_csv('./data/COVID-19_Vaccinations_in_the_United_States_Jurisdiction.csv')

# if ( df):
#     print("Unable to read corrupted csv")
# else:
print("Read csv which has " + str(df.shape) + " dims.")

print("CSV Data:")
print(df.head())


# Load data into df and perform inference


# Create new dictionary with additional values
