package com.books.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "event_decoration")
public class Bookorder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;
    private String lastName;
    private String mobileNumber;
    private String email;
    private String eventPlace;
    private String eventTime;
    private String packageSelected;
    private String eventDate;
    private boolean photography;
    private String diningOptions;
    private String furnitureType;
    private boolean musicEvent;
    private boolean danceEvent;
    private boolean dronePhotography;
    private String address;

    public Bookorder() {
    }

    public Bookorder(int id, String firstName, String lastName, String mobileNumber, String email,
                           String eventPlace, String eventTime, String packageSelected, String eventDate,
                           boolean photography, String diningOptions, String furnitureType, boolean musicEvent,
                           boolean danceEvent, boolean dronePhotography, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.eventPlace = eventPlace;
        this.eventTime = eventTime;
        this.packageSelected = packageSelected;
        this.eventDate = eventDate;
        this.photography = photography;
        this.diningOptions = diningOptions;
        this.furnitureType = furnitureType;
        this.musicEvent = musicEvent;
        this.danceEvent = danceEvent;
        this.dronePhotography = dronePhotography;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEventPlace() {
        return eventPlace;
    }

    public void setEventPlace(String eventPlace) {
        this.eventPlace = eventPlace;
    }

    public String getEventTime() {
        return eventTime;
    }

    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }

    public String getPackageSelected() {
        return packageSelected;
    }

    public void setPackageSelected(String packageSelected) {
        this.packageSelected = packageSelected;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public boolean isPhotography() {
        return photography;
    }

    public void setPhotography(boolean photography) {
        this.photography = photography;
    }

    public String getDiningOptions() {
        return diningOptions;
    }

    public void setDiningOptions(String diningOptions) {
        this.diningOptions = diningOptions;
    }

    public String getFurnitureType() {
        return furnitureType;
    }

    public void setFurnitureType(String furnitureType) {
        this.furnitureType = furnitureType;
    }

    public boolean isMusicEvent() {
        return musicEvent;
    }

    public void setMusicEvent(boolean musicEvent) {
        this.musicEvent = musicEvent;
    }

    public boolean isDanceEvent() {
        return danceEvent;
    }

    public void setDanceEvent(boolean danceEvent) {
        this.danceEvent = danceEvent;
    }

    public boolean isDronePhotography() {
        return dronePhotography;
    }

    public void setDronePhotography(boolean dronePhotography) {
        this.dronePhotography = dronePhotography;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

 
}
