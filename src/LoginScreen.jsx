import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,

} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Picker from '@react-native-picker/picker';

const MyPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [jobNumber, setJobNumber] = useState('');
  const [poNumber, setPoNumber] = useState('');
  const [details, setDetails] = useState('');
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedShowOption, setSelectedShowOption] = useState('5');

  const handleNew = () => {
    
  };

  const handleSave = () => {
    
    const newEntry = { date, title, jobNumber, poNumber, details };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  const handleCancel = () => {

    setTitle('');
    setDate(new Date());
    setJobNumber('');
    setPoNumber('');
    setDetails('');
  };

  const handleDelete = () => {
    
    setEntries((prevEntries) => prevEntries.slice(0, -1));
  };

  const handleAttachments = () => {
    
  };

  const handleBack = () => {
    
  };

  const handleDatePickerChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text>{item.date.toLocaleDateString()}</Text>
      <Text>{item.title}</Text>
      <Text>{item.jobNumber}</Text>
      <Text>{item.poNumber}</Text>
      <Text>{item.details}</Text>
      
      <TouchableOpacity onPress={() => handleAction(item)}>
        <Text>Action</Text>
      </TouchableOpacity>
    </View>
  );

  const handleAction = (entry) => {
   
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={handleNew}>
                <Text style={styles.buttonText}>New</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleAttachments}
              >
                <Text style={styles.buttonText}>Attachments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Title *</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter Title"
              />

              <TouchableOpacity onPress={showDatePickerModal}>
                <Text style={styles.label}>Date *</Text>
                <Text style={styles.input}>{date.toLocaleDateString()}</Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={handleDatePickerChange}
                />
              )}

              <Text style={styles.label}>JOB Number</Text>
              <TextInput
                style={styles.input}
                value={jobNumber}
                onChangeText={setJobNumber}
                placeholder="Enter JOB Number"
              />

              <Text style={styles.label}>PO Number</Text>
              <TextInput
                style={styles.input}
                value={poNumber}
                onChangeText={setPoNumber}
                placeholder="Enter PO Number"
              />

              <Text style={styles.label}>Details</Text>
              <TextInput
                style={[styles.input, { height: 80 }]}
                value={details}
                onChangeText={setDetails}
                placeholder="Enter Description"
                multiline
              />
            </View>


            <View style={styles.inputContainer}>
              <Text style={styles.label}>Search</Text>
              <TextInput
                style={styles.searchInput}
                value={search}
                onChangeText={setSearch}
                placeholder="Search"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {/* Implement search logic */}}
              >
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tableHeader}>
              <Text>Date</Text>
              <Text>Title</Text>
              <Text>JOB</Text>
              <Text>PO</Text>
              <Text>Details</Text>
              <Text>Actions</Text>
            </View>
          </>
        )}
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  buttonText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 16,
  },
  showContainer: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 4,
    color: 'black', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    padding: 8,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
  },
});

export default MyPage;
