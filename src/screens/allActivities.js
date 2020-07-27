import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import {
  hp,
  wp,
  TransactionLoader,
  WideCard,
  BottomSheet,
  DeleteBottomSheet,
  ViewDetailsBottomSheet,
  Header,
  MainView,
  BackgroundView,
  sortData,
  HeaderRightView,
  EmptyActivity,
  RegularText,
} from "../common";
import { deleteActivity } from "../store/actions/activityAction";
import { Actions } from "react-native-router-flux";
import { allActivitiesStyles as styles } from "./allStyles";

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
            titleStyle={[
              styles.headerText,
              { marginLeft: allActivities.length ? wp(80) : wp(25) },
            ]}
            right={
              allActivities.length ? (
                <HeaderRightView
                  onDescend={() => this.handleDescend()}
                  onAscend={() => this.handleAscend()}
                />
              ) : null
            }
          />
          <MainView>
            <RegularText />
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
                <WideCard
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
