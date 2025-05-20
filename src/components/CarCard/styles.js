import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFD500',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#EAEAEA',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#003366',
    marginBottom: 2,
  },
  year: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#333',
    marginBottom: 2,
  },
  arrowButton: {
    backgroundColor: '#003366',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  arrow: {
    color: '#FFD500',
    fontSize: 20,
    fontWeight: 'bold',
  },
});