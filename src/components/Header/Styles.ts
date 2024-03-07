import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  headerNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  name: {
    color: colors.nameColor,
    fontSize: 16,
    fontWeight: '700',
  },

  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 45,
  },

  btnRow: {
    flexDirection: 'row',
    gap: 15,
  },

  btnContainer: {
    alignItems: 'center',
    gap: 5,
  },

  btnText: {
    color: colors.textColor,
    fontSize: 10,
    fontWeight: '500',
  },

  clearTasksText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  line: {
    backgroundColor: colors.lineColor,
    height: 0.5,
    marginTop: 20,
  },
});
