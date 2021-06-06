import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  cardContainer: {
    padding: 16,
    paddingTop: (Dimensions.get('window').width * 0.8 - 14) / 3.2,
    backgroundColor: '#c1c2c3',
    marginBottom: 10,
    borderRadius: 12,
    width: Dimensions.get('window').width * 0.8,
    height: (Dimensions.get('window').width * 0.8) / 1.6,
  },
  bottomCardContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  cardName: {
    fontSize: 14,
    color: '#292929',
    alignSelf: 'center',
  },
  cardNumber: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#292929',
  },
  expiracyContainer: {flexDirection: 'row', alignItems: 'center'},
  expiracyText: {fontSize: 12},
  expiracyTextValue: {
    borderColor: '#f1f2f3',
    padding: 4,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputsContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#c1c2c3',
    borderWidth: 1,
  },
  inputs: {
    paddingHorizontal: 8,
    color: '#292929',
  },
});
