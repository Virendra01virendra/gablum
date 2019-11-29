package com.gablum.scheduler.SchedulerConfig;

//import org.quartz.*;
//import org.quartz.impl.matchers.GroupMatcher;
//import org.quartz.spi.JobFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//
//import java.util.Date;
//import java.util.List;
//import java.util.Map;
//import java.util.Set;

@Configuration
public class JobDetailConfig {
//    @Bean
//    public JobDetail jobDetailBean(){
//        return new JobDetail() {
//            @Override
//            public JobKey getKey() {
//                return null;
//            }
//
//            @Override
//            public String getDescription() {
//                return null;
//            }
//
//            @Override
//            public Class<? extends Job> getJobClass() {
//                return null;
//            }
//
//            @Override
//            public JobDataMap getJobDataMap() {
//                return null;
//            }
//
//            @Override
//            public boolean isDurable() {
//                return false;
//            }
//
//            @Override
//            public boolean isPersistJobDataAfterExecution() {
//                return false;
//            }
//
//            @Override
//            public boolean isConcurrentExectionDisallowed() {
//                return false;
//            }
//
//            @Override
//            public boolean requestsRecovery() {
//                return false;
//            }
//
//            @Override
//            public JobBuilder getJobBuilder() {
//                return null;
//            }
//
//            @Override
//            public Object clone() {
//                return null;
//            }
//        };
//    }
//    @Bean
//    public Trigger jobTrigger(){
//        return new Trigger() {
//            @Override
//            public TriggerKey getKey() {
//                return null;
//            }
//
//            @Override
//            public JobKey getJobKey() {
//                return null;
//            }
//
//            @Override
//            public String getDescription() {
//                return null;
//            }
//
//            @Override
//            public String getCalendarName() {
//                return null;
//            }
//
//            @Override
//            public JobDataMap getJobDataMap() {
//                return null;
//            }
//
//            @Override
//            public int getPriority() {
//                return 0;
//            }
//
//            @Override
//            public boolean mayFireAgain() {
//                return false;
//            }
//
//            @Override
//            public Date getStartTime() {
//                return null;
//            }
//
//            @Override
//            public Date getEndTime() {
//                return null;
//            }
//
//            @Override
//            public Date getNextFireTime() {
//                return null;
//            }
//
//            @Override
//            public Date getPreviousFireTime() {
//                return null;
//            }
//
//            @Override
//            public Date getFireTimeAfter(Date date) {
//                return null;
//            }
//
//            @Override
//            public Date getFinalFireTime() {
//                return null;
//            }
//
//            @Override
//            public int getMisfireInstruction() {
//                return 0;
//            }
//
//            @Override
//            public TriggerBuilder<? extends Trigger> getTriggerBuilder() {
//                return null;
//            }
//
//            @Override
//            public ScheduleBuilder<? extends Trigger> getScheduleBuilder() {
//                return null;
//            }
//
//            @Override
//            public int compareTo(Trigger trigger) {
//                return 0;
//            }
//        };
//    }
//    @Bean Scheduler schedulerConfig(){
//        return new Scheduler() {
//            @Override
//            public String getSchedulerName() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public String getSchedulerInstanceId() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public SchedulerContext getContext() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public void start() throws SchedulerException {
//
//            }
//
//            @Override
//            public void startDelayed(int i) throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean isStarted() throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public void standby() throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean isInStandbyMode() throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public void shutdown() throws SchedulerException {
//
//            }
//
//            @Override
//            public void shutdown(boolean b) throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean isShutdown() throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public SchedulerMetaData getMetaData() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public List<JobExecutionContext> getCurrentlyExecutingJobs() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public void setJobFactory(JobFactory jobFactory) throws SchedulerException {
//
//            }
//
//            @Override
//            public ListenerManager getListenerManager() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Date scheduleJob(JobDetail jobDetail, Trigger trigger) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Date scheduleJob(Trigger trigger) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public void scheduleJobs(Map<JobDetail, Set<? extends Trigger>> map, boolean b) throws SchedulerException {
//
//            }
//
//            @Override
//            public void scheduleJob(JobDetail jobDetail, Set<? extends Trigger> set, boolean b) throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean unscheduleJob(TriggerKey triggerKey) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public boolean unscheduleJobs(List<TriggerKey> list) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public Date rescheduleJob(TriggerKey triggerKey, Trigger trigger) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public void addJob(JobDetail jobDetail, boolean b) throws SchedulerException {
//
//            }
//
//            @Override
//            public void addJob(JobDetail jobDetail, boolean b, boolean b1) throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean deleteJob(JobKey jobKey) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public boolean deleteJobs(List<JobKey> list) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public void triggerJob(JobKey jobKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void triggerJob(JobKey jobKey, JobDataMap jobDataMap) throws SchedulerException {
//
//            }
//
//            @Override
//            public void pauseJob(JobKey jobKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void pauseJobs(GroupMatcher<JobKey> groupMatcher) throws SchedulerException {
//
//            }
//
//            @Override
//            public void pauseTrigger(TriggerKey triggerKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void pauseTriggers(GroupMatcher<TriggerKey> groupMatcher) throws SchedulerException {
//
//            }
//
//            @Override
//            public void resumeJob(JobKey jobKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void resumeJobs(GroupMatcher<JobKey> groupMatcher) throws SchedulerException {
//
//            }
//
//            @Override
//            public void resumeTrigger(TriggerKey triggerKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void resumeTriggers(GroupMatcher<TriggerKey> groupMatcher) throws SchedulerException {
//
//            }
//
//            @Override
//            public void pauseAll() throws SchedulerException {
//
//            }
//
//            @Override
//            public void resumeAll() throws SchedulerException {
//
//            }
//
//            @Override
//            public List<String> getJobGroupNames() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Set<JobKey> getJobKeys(GroupMatcher<JobKey> groupMatcher) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public List<? extends Trigger> getTriggersOfJob(JobKey jobKey) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public List<String> getTriggerGroupNames() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Set<TriggerKey> getTriggerKeys(GroupMatcher<TriggerKey> groupMatcher) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Set<String> getPausedTriggerGroups() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public JobDetail getJobDetail(JobKey jobKey) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Trigger getTrigger(TriggerKey triggerKey) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public Trigger.TriggerState getTriggerState(TriggerKey triggerKey) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public void resetTriggerFromErrorState(TriggerKey triggerKey) throws SchedulerException {
//
//            }
//
//            @Override
//            public void addCalendar(String s, Calendar calendar, boolean b, boolean b1) throws SchedulerException {
//
//            }
//
//            @Override
//            public boolean deleteCalendar(String s) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public Calendar getCalendar(String s) throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public List<String> getCalendarNames() throws SchedulerException {
//                return null;
//            }
//
//            @Override
//            public boolean interrupt(JobKey jobKey) throws UnableToInterruptJobException {
//                return false;
//            }
//
//            @Override
//            public boolean interrupt(String s) throws UnableToInterruptJobException {
//                return false;
//            }
//
//            @Override
//            public boolean checkExists(JobKey jobKey) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public boolean checkExists(TriggerKey triggerKey) throws SchedulerException {
//                return false;
//            }
//
//            @Override
//            public void clear() throws SchedulerException {
//
//            }
//        };
//    }
}