import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList } from "react-native";
import {
  hp,
  wp,
  TransactionLoader,
  BlackCoral,
  Snow300,
  ActivePaycodeCard,
  BottomSheet,
  DeleteBottomSheet,
  ViewDetailsBottomSheet,
  Header,
  MainView,
  BackgroundView,
  sortData,
  HeaderRightView,
  EmptyActivity,
} from "../common";
import * as Colors from "../common/Colors";
import { deleteActivity } from "../store/actions/activityAction";
import { Actions } from "react-native-router-flux";

class Activity extends Component {
  state = {
    details: null,
    id: "",
    allActivities: this.props.activities,
  };

  confirmDeleteBottomSheet = ref => {
    this.DeleteBottomSheet = ref;
  };
  ViewDetailsBottomSheet = ref => {
    this.DetailsBottomsheet = ref;
  };
  handleDelete = () => {
    this.DeleteBottomSheet.close();
    this.props.deleteActivity(this.state.id);
  };
  handleShowDetails = data => {
    this.setState({ details: data }, this.DetailsBottomsheet.open());
  };
  onPressDelete = id => {
    this.setState({ id }, this.DeleteBottomSheet.open());
  };

  handleAscend = () => {
    const data = sortData(this.props.activities);
    this.setState({ allActivities: data });
  };
  handleDescend = () => {
    const data = sortData(this.props.activities);

    this.setState({ allActivities: data.reverse() });
  };

  render() {
    const { loading } = this.props;
    const { allActivities } = this.state;
    return (
      <>
        <BackgroundView style={{ paddingTop: hp(35) }}>
          <Header
            title="My Activities"
            titleStyle={styles.headerText}
            right={
              <HeaderRightView
                onDescend={() => this.handleDescend()}
                onAscend={() => this.handleAscend()}
              />
            }
          />
          <MainView>
            <BottomSheet
              openRef={this.confirmDeleteBottomSheet}
              render={
                <DeleteBottomSheet
                  onCancel={() => this.DeleteBottomSheet.close()}
                  onDelete={this.handleDelete}
                />
              }
              height={hp(250)}
            />
            <BottomSheet
              openRef={this.ViewDetailsBottomSheet}
              render={<ViewDetailsBottomSheet details={this.state.details} />}
              height={hp(600)}
            />
            <FlatList
              contentContainerStyle={{ paddingBottom: hp(20) }}
              data={allActivities}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <ActivePaycodeCard
                  details={item}
                  onEdit={() => Actions.show_activity({ data: item })}
                  onDelete={() => this.onPressDelete(item.id)}
                  onPress={() => this.handleShowDetails(item)}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={
                <EmptyActivity onPress={() => Actions.create_activity()} />
              }
            />
          </MainView>
        </BackgroundView>
        {loading && <TransactionLoader />}
      </>
    );
  }
}
const mapStateToProps = state => {
  const { loading, activities } = state.activity;

  return {
    loading,
    activities,
  };
};
const mapDispatchToProps = {
  deleteActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: Colors.White,
    marginLeft: wp(80),
  },
  amount: {
    fontSize: hp(12),
    lineHeight: hp(12),
    fontWeight: "500",
    color: Colors.Grey200,
  },
  time: {
    fontSize: hp(12),
    lineHeight: hp(12),
    color: Colors.Smoke400,
    // marginLeft: wp(5),
  },
  icontime: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBox: {
    marginLeft: wp(16),
    alignSelf: "center",
  },
  paycode: {
    fontSize: hp(12),
    lineHeight: hp(12),
    fontWeight: "500",
    color: Colors.Grey200,
    marginBottom: hp(13),
  },
  card: {
    height: hp(87),
    paddingVertical: hp(25),
    width: wp(325),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(4),
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: wp(19),
    marginTop: hp(20),
    alignSelf: "center",
  },
  headerGrid: {
    marginTop: hp(14),
  },
  transactionName: {
    color: Colors.Grey200,
    fontSize: 14,
  },

  detailBox: {
    width: wp(325),
    marginTop: hp(20),
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: Colors.Platinum,
    alignItems: "center",
    marginBottom: hp(25),
  },
  transactionDateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(295),
    marginTop: hp(13),
  },
  transactionDate: {
    color: Colors.Smoke400,
  },
  divider: {
    width: wp(325),
    height: 0.5,
    backgroundColor: Colors.Platinum,
    marginTop: hp(10),
  },
  detailsText: {
    marginTop: hp(6),
    fontSize: hp(12),
    lineHeight: 25,
    color: Colors.Smoke400,
  },
  detailGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(4),
    width: wp(295),
  },
  firstDetailGrid: {
    marginTop: hp(11),
  },
  transactionKey: {
    color: Colors.Smoke400,
    height: hp(25),
  },
  transactionKeyx: {
    color: Colors.Grey200,
    height: hp(25),
  },
  detailButton: {
    // marginTop: hp(20),
    backgroundColor: Colors.DarkBlue,
  },
  detailButtonText: {
    color: Colors.White,
  },
  btcButton: {
    marginTop: hp(20),
    backgroundColor: Colors.PaleYellow,
  },
  btcButtonText: {
    color: Colors.VividAmber,
  },
  homeCard: {
    height: hp(87),
    width: wp(325),
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: wp(30),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(4),
    marginTop: hp(20),
  },
  cardtitle: {
    color: Colors.Grey200,
    fontSize: hp(12),
    lineHeight: hp(25),
    fontWeight: "500",
    marginLeft: wp(37),
  },
  icon: {
    height: hp(38),

    width: wp(38),
  },
  item: {
    width: wp(325),
    height: hp(85),
    borderRadius: hp(4),
    borderBottomColor: BlackCoral,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Snow300,
    paddingLeft: wp(25),
    paddingRight: wp(37),
    alignItems: "center",
  },

  container: {
    flex: 1,
    paddingTop: hp(20),
    backgroundColor: "#fff",
  },
});
